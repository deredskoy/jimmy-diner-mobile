import menuArray from './data.js'

function getMainHtml() {
    let feedHtml = ''
    menuArray.forEach(function(position) {
        feedHtml += `
            <div id='menu'>
                <div id='menu-inner' class='flex justify-around mt-4 mb-4'>
                    <div id='emoji-wrapper' class='text-6xl pl-4 pt-9 opacity-90'>
                        <p class='flex'>${position.emoji}</p>
                    </div>
                    <div id='product-wrapper' class='pt-7 mr-32'>
                        <h2 id='name' class='text-2xl'>${position.name}</h2>
                        <p id='products' class='text-xs text-regal-grey'>${position.ingredients}</p>
                        <p id='price' class='mt-1'>$${position.price}</p> 
                    </div>
                    <div id='button-wrapper' class='pt-7 pr-6'>
                        <div id='addBtn' class='flex h-[35px] w-[35px] rounded-[50%] border-regal-grey border-solid border-[1px] justify-center mt-4'><button data-item='${position.id}'>+</button></div>
                    </div>
                </div>
                <div id='devider-wrapper' class='flex justify-center'>
                    <div id='devider' class='h-[1px] bg-regal-grey mt-6 w-[370px]'></div>
                </div>
            </div>
            `
    })
    return feedHtml
}
 
// checking the click on the button and passing its id to handleItemClick()
document.addEventListener('click', function(e) {
    if (e.target.dataset.item) {
        handleItemClick(e.target.dataset.item)
    }
})

// pushing object (defined by the itemId) to the orderObjArray to pass it after to the getOrderHtml()
const orderObjArray = []
function handleItemClick(itemId) {
    const targetItemObj = menuArray.filter(function(item) {
        return item.id = itemId
    })[0]
    if (targetItemObj.id === itemId) {
        orderObjArray.push(targetItemObj)
    }
    render()
    console.log(orderObjArray)
}

// function responsible to display html code with proper object on the page
function getOrderHtml() {
    let ordersHtml = ''
    orderObjArray.forEach(function(position) {
        ordersHtml += `
            <div id='item-wrapper' class='flex justify-around'>
                <div><h3>${position.name}</h3></div>
                <div class='text-smm'><button id='remove-btn' class='text-regal-grey' style="font-size: 8px;">remove</button></div>
                <div><h3>$${position.price}</h3></div>
            </div>
        `
    })
    return ordersHtml
}

function render() {
    document.getElementById('main-menu').innerHTML = getMainHtml()
    document.getElementById('order-section').innerHTML = getOrderHtml()
}

render()