# AngularPostForum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7. This ia an angular app for showcasing each post from an array of Objets in a square matrix.  
The app uses ngrx for state management and unit tests are added.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Angular Assignment Questions

1. Why is it (or isn't it) safe to use JWT Token?

    JWT tokens are digitally signed using hmacsha-256 or rsa algorithm. Thus it is nearly impossible to tamper the string and make sure the authenticity of the sender. The validity of the encrypted string can also be decided making it unusable after a fixed time period thus limiting the chances of the token being compromised.
    JWT tokens can be unsafe, if its poorly implemented and attackers managed to alter the algorith wih  a weaker one.As JWT is stateless and not stored in server side, its difficult to revoke the token once its compromised. Token remain valid till its expires. Long expiration time is a challenge as this increases the window of opportunity for misuse if a token is compromised.

2.  In our web-application, messages sent from one user to another, can contain HTML, which poses some security risks. Describe two attack vectors
bad actors might try to abuse? And how would you mitigate these vectors?

    HTML content in messages poses significant security issues like Cross-Site Scripting (XSS) and HTML Injection attacks. These are the two primary attack vectors.
	We can implement HTML sanitation on user input and make use of Content Security Policy to restrict the sources from which content can be loaded.

3.  Explain the difference between mutable and immutable objects.
● What is an example of an immutable object in JavaScript?
● What are the pros and cons of immutability?
● How can you achieve immutability in your own code?

    Data types that can not be changed after creation are called immutable. Primitive data types in javascript are immutable. A copy of it can be created without changing the original value.

    let user1 = 'foo'
    let user2 = user

    Here user1 and user2 have different memory location and both will have the value 'foo'. Changing user1 will not change the value of user2.
    Objects, arrays and functions (reference types) are mutable. It can be accessed and changed after it is created in memory.

    let employee1 = { name = 'foo', deptid = '100'};
    let employee2 = employee;

    Here both employee1 and employee2 refers to same memory location. Any change in the values of employee1 will affect employee2. employee2.name = 'bar' will affect employee1 as both refers to same memory location.

    Pros : It avoids unnecessary modifications to objects once they are passed into a function. Thus the state or behaviour of the program is not affected unintentionally. When state management libraries are used, immutability helps in maintaining and tracking state changes easily.
    cons : Memory consumption will increase since every time a new object has to be created if a modification is required. Overloaded memory will slow down garbage collection affecting the overall performance of the application. It might increase the lines of code or  sometimes nested spread operators might be needed to modify immutable objects.

    An object can be made immutable (not allowing changes) by using Object.freeze() method. const can also be used to avoid reassigning new values. const makes sure the variable refers to the same location. it does not guarantee that the data it refers to remains the same. If there are nested objects, total immutability can be achieved by recursively freezing each level.

4.  If you would have to speed up the loading of a web-application, how would you do that?   

    Optimize images : smaller sized images download faster.

    Limit the number of HTTP requests : multiple requests are sent for various resources like images, scripts and css files and  each http request results in a round trip to and from the server. By reducing the number of assets the page needs, the count of http requests can be reduced thus the speed can be increased.

    Browser caching: Static files can be stored temporarily in browser cache, making the recently visited pages load quickly. By coding in such a way to store static elements, and reusing them, we can make sure the time taken to transfer resources from server to browser is reduced.

    Minifying CSS and JavaScript files : CSS and JavaScript not meant for the user to read and the white spaces in it can be removed thereby reducing the size. It keeps only what is needed for the browser to display the webpage. This will reduce the file size and take less bandwidth.

    Lazy Loading : Non critical resources can be lazy loaded. This loads non critical content like video, image as it becomes visible in the viewport.

    Server Side Rendering (SSR) : Server side rendering improves the performance by delivering a fully rendered HTML to the client which can be parsed and displayed even before the JavaScript is downloaded, easing the task of the browser. This is beneficial when the user is on low-bandwidth connections or handheld devices.

5.  What part of a new job do you think is more important:
● Choose your own hardware, but work with a company supplied operating system image.
● You’re offered a standard piece of mediocre hardware. Free to pick your own Software.

    Both approach has its owm advantages and disadvantages. But I would prefer choosing my own hardware, but working with a Company-Supplied Operating System Image.I can choose hardware with high performance,that is a powerful processor, ample RAM, high-resolution display. I always prefer a laptop with a big screen and a secondary monitor as we simultaneously do debugging, html inspection and code fixing. As an employee, we have limited software flexibility which ensures data security of the employer.A company-controlled OS image might include monitoring tools or strict security measures, which is lacking if we choose OS and that is an additional responsibility for us. Mediocre hardware might not be easily upgradeable, potentially limiting its lifespan and effectiveness as our work demands grow.