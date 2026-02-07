REFLECTION

How you implemented TypeScript features and OOP principles.
The challenges you encountered and how you overcame them.
How you handled asynchronous operations and error management.

I created the project's file structure as per instructions. I tried to map the flow of the information across the modules and started with guesses as to the imports and inputs. I started with the Product class. I determined which fields from the API would be the most useful for the project and documented them. I then defined a constructor for the Product class that used some private and some public properties depending on if the properties would be used within the class or not. I then created the required functions in the Product class and made them accessible to other modules by typing them as exports. 

I worked though the calculation modules (discount and tax), defining inputs, processes, and outputs for each, until it was time to actually get the data. I used an async function to fetch the data and created a type for the response to ensure it was in the correct, useful format. I retrieved results several times to target the correct properties and inform the interface for the Products, Iproduct. The interface is shared by the Product class and the formatted data from the API response.

I then worked on the displayDetails function to format the text. I ran into a lot of issues with 'undefined' data types. I resolved these by using if statements that evaluated the type of the variable being used in each portion of the function. I also struggled with calculations because I'd used the pre-discount price in the calculateTax function and that was hard to track down because there were essentially 3 functions that could have been the culprit. The output of the displayDetails function is a console message that puts each Product instance into text format for the Catalog and I was able to achieve a formatted output.

Once the displayDetails function was complete, I worked on pulling together the handleRequest API call function and the displayDetails function in the main.ts module. That was challenging because of timing issues and I discovered I needed to await the handleRequest function's response before moving on to the next steps in the main.ts function.

Error Handling was next. When I wrote the functions (especially the typeguard parts), I took errors into account and had added placeholders. I created the new error classes for Data Errors and API errors and created new instances of them where necessary. I then updated the errorHandler function from a previous project and called it within the catch block after adding try...catch logic to relevant functions. I also added finally to at least the main.ts function to signal the end of the catalog console output.

I recognized that I didn't account for if the API call failed and I wasn't sure how to account for it, so I researched the output type of fetch and found that it returns the response to a promise. Knowing that, I knew that the other option would be a rejection and made my own rejection after the fetch line with an if statement evaluating the status of the response which returns the HTTP status code of the response. I researched the HTTP status codes on MDN's documentation and found that 200 and 304 were enough use cases to accomodate a successful API call. If not 200 or 304, the API error would get thrown.

I then compiled, cleaned up the code, and made comments. Enjoy!