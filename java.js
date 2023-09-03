var textarea = document.querySelector('textarea');
var btn = document.querySelector('.send');

btn.addEventListener('click', () => {
    document.querySelector('.textarea').style.height = '3rem';
    input();   
});


document.querySelector('.icons').addEventListener('click', () => {
    document.querySelector('.chatbot').classList.toggle('show');
    document.querySelector('.message').classList.toggle('remove');
    document.querySelector('.eject').classList.toggle('install'); 
})


var input = () => {
    var div = document.createElement('div');
    div.classList.add('input');
    div.innerHTML = `<p class="inputp">${textarea.value}   
    </p>`;
    document.querySelector('.h').appendChild(div);
    document.querySelector('.inputp').textContent = textarea.value;
    output();
}

var openai = async () => {
    var API = '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';
    var API_URL = 'https://api.openai.com/v1/chat/completions';
    try {
        var respone = await  fetch(API_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: textarea.value}],
            })
            });
    
            data = await respone.json();
            var outputt = await data.choices[0].message.content;
            
    } catch (error) {
        outputt = 'Something Went Try';
    }
    
        setTimeout(() => {
            div = document.querySelector('.h').lastElementChild.lastElementChild;
            div.innerHTML = outputt;
            console.log(div);
            document.querySelector('.h').scrollTop = document.querySelector('.h').scrollHeight;
        }, 2000); 
      
        console.log(outputt);
}

var output = () => {
   
    var div = document.createElement('div');
    div.classList.add('output');
    div.innerHTML = ` <span  class="material-symbols-outlined robot">
    smart_toy
    </span>
    <p class="outputp">Thinking
    </p>`;

    document.querySelector('.h').appendChild(div);
    document.querySelector('.h').scrollTop = document.querySelector('.h').scrollHeight;
    openai(); 
}
var a = document.querySelector('.h').lastElementChild;


document.querySelector('textarea').addEventListener('input', () => {
    document.querySelector('.textarea').style.height = `${textarea.scrollHeight}px`;
})









