let request = async (obj) =>{
    try {
         let xhr = new XMLHttpRequest();
        xhr.open(obj.method || 'GET', obj.url);
        if(xhr.onload){
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    return xhr.response;
                } else {
                    throw new Error(xhr.statusText);
                }
            };
        }  
        xhr.send(obj.url);                                         
        
    } catch (error) {
        
    }
   
}




let object = {
    url: 'https://jsonplaceholder.typicode.com/todos/',
    method: 'GET',
    body: null 
}


const bush = async (url) => {
    try {
        const response = await fetch(url, {
            method: object.method,
            body: object.body
        });
        const results = await response.json();
     
        document.getElementById("todos").innerHTML = request= JSON.stringify(results, null, 2);
      
        console.log(results);
        return results;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

bush(object.url);


                   
