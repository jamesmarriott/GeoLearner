import React from 'react'
import {BeerTable} from './BeerTable'
import mydata from '.././data/beers1.json'
import {Heading} from '@chakra-ui/react'

export const TableMaster = ()=>{

    // filter the data 
    const [beers, setBeers] = React.useState(null)


        React.useEffect(()=>{

        const result = []
            
        mydata.forEach(value => {

            result.push({
                id: value.id,
                name: value.name,
                tagline: value.tagline,
                date: value.first_brewed,
                description: value.description,
                image_url: value.image_url,
                abv: value.abv
            })

    })
        setBeers(result)
    },[])


    // let punkURL = 'https://api.punkapi.com/v2/beers'

    // React.useEffect(()=>{

    //     const beerGetter = async()=>{
    //         const res = await getFromApi()
    //         setBeers(res)
    //     }
    //     beerGetter()
    // },[])



    // const getFromApi = async ()=>{
    //     const response = await fetch(punkURL)
    //     const data = response.json()
    //     return data
    // }

    return (
        <>
            <Heading as='h1' size='3xl'>All The BrewDog Beers</Heading>
            {beers ? <BeerTable beers={beers}/> : <h1>Loading</h1>}
        </>
    )
}

export default TableMaster