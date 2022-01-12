import React from 'react'
import {CountryTable} from './CountryTable'
import mydata from '../flagdata/countries.json'
import {Heading} from '@chakra-ui/react'

export const FlagTableMaster = ()=>{

    // filter the data 
    const [countries, setCountries] = React.useState(null)


        React.useEffect(()=>{

        const result = []
            
        mydata.forEach(value => {

            result.push({
                id: value.Index,
                name: value.Country,
                capital: value.Capital,
                population: value.Population,
                area: value.Area,
                code: value.Code,
                density: value.Popdensity
            })

    })
        setCountries(result)
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
            <Heading as='h1' size='3xl'>World Countries</Heading>
            {countries ? <CountryTable countries={countries}/> : <h1>Loading</h1>}
        </>
    )
}

export default FlagTableMaster