import axios from 'axios' 

export const setLoaded = payload => ({
	type: 'SET_LOADED',
	payload
})

export const fetchPizzas = (sortBy, category) => dispatch => {
	dispatch({
		type: 'SET_LOADED',
		payload: false,
	}) 

	// for json-server
	// axios.get(`/pizzas?${category !== null 
	// 	? `category=${category}` 
	// 	: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
	// .then(({ data }) => {
 //        dispatch(setPizzas(data))
 //    })

 //for mockAPI.io
 axios.get(`https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68?${category !== null 
		? `category=${category}` 
		: ''}&sortby=${sortBy.type}&order=${sortBy.order}`)
	.then(({ data }) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = items => ({
	type: 'SET_PIZZAS',
	payload: items,
})