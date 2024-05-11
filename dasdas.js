const searchQuery = [1,2,3]
let a=searchQuery.map(
    item =>{return(
        {
            "type": "RichTextBlock",
            "inlines": [
                {
                    "type": "TextRun",
                    "text": item
                }
            ]
        }
    )})

console.log(JSON.stringify(a[0]))