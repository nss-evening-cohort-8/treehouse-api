# Treehouse API

An in-class demonstration of two different ways of getting data from an API and printing it to the page.

- The **old way** is using functions calling other functions, etc. It is using a callback function inside of our data getter to call the printing to the dom function directly.
- The **new way** is using Promises to better manage where we make a call to get data. The promise gives us back our data in our component. We then pass that data into our printing function.