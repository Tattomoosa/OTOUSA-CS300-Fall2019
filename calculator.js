let ds = document.querySelector.bind(document), l=ds('#l'), o=ds('#o'), r=ds('#r'), ch='change',
    c = () => ds('#out').innerHTML = '' + eval(l.value + o.options[o.selectedIndex].text + r.value)
l.addEventListener(ch, c); r.addEventListener(ch, c); o.addEventListener(ch, c); c()

