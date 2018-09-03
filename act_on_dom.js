ctOnElements = (selectors,action)=>{
    var collection = {
        count: 0
    };

    document.querySelectorAll(selectors).forEach((e,i,a)=>{
        let aa = (temparr) => {
            Object.assign(collection, temparr);
        }
        let takeAction = () => {
            switch (action) {
                case 'remove':
                    e.remove();
                    break;
                default:
                    break;
            }
        }
        let tagname = e.tagName
          , temparr = {};
        if (collection[tagname] === undefined) {
            temparr[tagname] = {
                count: 0
            };
            aa(temparr);
        } else {
            temparr[tagname] = {
                count: collection[tagname].count + 1
            };
            aa(temparr);
        }
        takeAction();
    })
  
    

    if (collection.hasOwnProperty('count')) delete collection.count;
    
    return collection;
}
//actOnElements(selector, action);
console.log(actOnElements('iframe, script', 'remove'));
console.log(actOnElements('iframe, script'));
