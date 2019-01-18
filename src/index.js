export default wrapLines = (container, opentag, closingtag) => {
        
    container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');     

    var spans = container.children, 
        top = 0,
        tmp = '';

    for (let i = 0; i < spans.length; i++) {

        var rect = spans[i].getBoundingClientRect().top;
        if (top === 0) {
            top = rect;
            tmp = opentag;
        }

        if (top < rect) {
            tmp += closingtag + opentag;
            top = rect;
        }
        
        tmp += spans[i].textContent + ' ';    
    }    
    
    tmp += closingtag;
    
    container.innerHTML = tmp

}
