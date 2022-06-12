## Todo List & Local Storage with JavaScript

Everyone are teaching ***How Make To Do List with JavaScript***. Yes, me too make this but with localStorage. I know, this project can develop. But my aim only teaching use localStorage with to do list. I hope you like this project. There is JavaScript codes in files of project. You can check.

### What can be done in the project?

- You can add your jobs to do.
- You can remove wrong jobs when add
- You can mark your completed jobs
- And all of that save to your local computer. Your information will stay up to date when you log in to your page again. Most beatiful this :)

## Local Storage
#### What is Local Storage?

Local Storage is a feature that allows JavaScript sites and applications to save key/value values ​​in a web browser without expiration date.

#### Be careful

The only thing to be aware of is do not store your important personal information in Local Storage.

#### How can use Local Storage?

Local Storage very easy of use. Create a JavaScript file and try codes in bottom.

##### setItem

Local Storage keeps your information as key value.

```javascript

    // localStorage.setItem(key, value)

    localStorage.setItem('firstLocalInfo', 'Love JavaScript');
```

The information we have set now has been added to the local storage side. Of course, we can't see that right now. Right-click anywhere on your page and then click inspect. On the console page that opens, there is an application section on the top tab. If you select the domain name you are in from the local storage in the application section, you can see the information we have added.

**My output**:

![Kodluyoruz Logo](./img/Ekran%20Resmi%202022-06-12%2022.55.39.png)

#### getItem

Now, we are get this info from Local Storage

```javascript

    // localStorage.getItem(key)

    let ls = localStorage.getItem('firstLocalInfo');

    console.log(ls)

    // Output: Love JavaScript
```

As you can see, we were able to get our information from the Local Storage. We need careful to this point a thing. We need careful to this point a thing. We got this info but value type is string. We need careful to this point a thing. We got this info but value type is string. İf you array or object set to Local Storage, that values for use you should be use parse method. Example:

```javascript

    let arr = ['Computer', 'Keyboard', 'Mouse']

    localStorage.setItem('arr', JSON.stringify(arr));

    // or

    let arr = {
        sale: true,
        products: ['Computer', 'Keyboard', 'Mouse']
    }

    localStorage.setItem('arr', JSON.stringify(arr));

    let localArr = localStorage.getItem('arr');

    console.log(typeof(localArr)) // Output: string

    // We should be use JSON.parse();

    let newLocalArr = JSON.parse(localStorage.getItem('arr'));

    console.log(typeof(newLocalArr)) // Outpu: object
    console.log(newLocalArr)

    // Output: {sale: true, products: Array(3)} not string

```
We just need to pay attention to this situation. I hope the content was helpful.

[Click here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for details Local Storage.