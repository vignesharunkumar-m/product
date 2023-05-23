let initialState = {
    datas:[]
}
// console.log(datas,"datas")

const Products = (state = Object.assign(initialState,{}),action) => {

    switch (action.type) {
        case "parent":
            let pro = {...initialState}
            pro.datas.push(action.Data)
            return initialState = pro
            // console.log(pro,"pro")
    
        default:
            return initialState
    }

}

export default Products