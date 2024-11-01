const buildItem = document.querySelectorAll('.build-items')
const informationAddress = document.querySelector('#information-address')
const informationFloors = document.querySelector('#information-floors')
const informationFlatAll = document.querySelector('#information-flat-all')
const informationFlatFree = document.querySelector('#information-flat-free')
const informationFlatSale = document.querySelector('#information-flat-sale')
const informationFlatReserve = document.querySelector('#information-flat-reserve')





buildItem.forEach(build => {
    build.addEventListener('mouseover', function(){

         console.log(build);
 
 
        const buildAddress = build.getAttribute('data-address')
        const buildFloors = build.getAttribute('data-floors')
        const buildFlatAll = build.getAttribute('data-flat-all')
        const buildFlatsFree = build.getAttribute('data-flat-free')
        const buildFlatsSale = build.getAttribute('data-flat-sale')
        const buildFlatsReserve = build.getAttribute('data-flat-reserve')


        informationAddress.innerHTML = buildAddress
        informationFloors.innerHTML = buildFloors
        informationFlatAll.innerHTML = buildFlatAll
        informationFlatFree.innerHTML = buildFlatsFree
        informationFlatSale.innerHTML = buildFlatsSale
        informationFlatReserve.innerHTML = buildFlatsReserve

    })







    const buildFree = build.getAttribute('data-flat-free')
    console.log(typeof buildFree);
    
    if(Number(buildFree) === 0) {
        build.classList.add('build-sold')
    }
     
    build.addEventListener('click', function(event){
        if(build.classList.contains('build-sold')){
            event.preventDefault();
        }
    })



    const installBuildItem = () => {
        const floorItem = document.querySelectorAll('.floor-item')

        floorItem.forEach(floor=> {
            const floorFree = floor.getAttribute('data-flat-free')
            if(Number(floorFree) === 0){
                floor.classList.add('floor-sold')
            }

            floor.addEventListener('click', function(event){
                if (floor.classList.contains('floor-sold')){
                    event.preventDefault();
                }
            })
        })
    }
    
}) 