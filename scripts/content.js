actOnElements = (selectors,action)=>{
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

respondToVisibility = function (element) {
    
        var targetNode = document.getElementsByTagName('html')[0];

        var config = { attributes: true, childList: true, subtree: true };

        var options = {
            root: document.documentElement
          }

          var callback = ( mutationsList) => {
            
            for(var mutation of mutationsList) {
                
                if(mutation.addedNodes !== undefined){
                    if(mutation.addedNodes.length > 0){
                        let an = mutation.addedNodes;
                        an.forEach((e) => {
                            var el = ['IFRAME','SCRIPT'].find((a)=>{return a === e.nodeName});
                            if(el !== undefined){
                                console.log(el + '  element added or removed');
                                actOnElements('iframe, script');
                                actOnElements('iframe, script', 'remove');
                            }
                        });
                    }
                }
            }
      }
      var observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
  }
  respondToVisibility();