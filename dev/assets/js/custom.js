const buildItem = document.querySelectorAll('.build-items')
const informationAddress = document.querySelector('#information-address')
const informationFloors = document.querySelector('#information-floors')
const informationFlatAll = document.querySelector('#information-flats-all')
const informationFlatFree = document.querySelector('#information-flats-free')
const informationFlatSale = document.querySelector('#information-flats-sale')
const informationFlatReserve = document.querySelector('#information-flats-reserve')





buildItem.forEach(build => {
    build.addEventListener('mouseover', function(){
 
 
        const buildAddress = build.getAttribute('data-address')
        const buildFloors = build.getAttribute('data-floors')
        const buildFlatsAll = build.getAttribute('data-flats-all')
        const buildFlatsFree = build.getAttribute('data-flats-free')
        const buildFlatsSale = build.getAttribute('data-flats-sale')
        const buildFlatsReserve = build.getAttribute('data-flats-reserve')


        informationAddress.innerHTML = buildAddress,
        informationFloors.innerHTML = buildFloors
        informationFlatsAll.innerHTML = buildFlatsAll
        informationFlatsFree.innerHTML = buildFlatsFree
        informationFlatsSale.innerHTML = buildFlatsSale
        informationFlatsReserve.innerHTML = buildFlatsReserve
        
    })
}) 