import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Image,
    chakra
} from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

    export const BeerTable=(props)=>{

        const {beers} = props

        console.log(beers)

        // const columns = React.useMemo(
        //     () => [
        //       {
        //         Header: 'Name',
        //         accessor: 'beer_name',
        //       },
        //       {
        //         Header: 'Tagline',
        //         accessor: 'tagline',
        //       },
        //       {
        //         Header: 'Multiply by',
        //         accessor: 'factor',
        //         isNumeric: true,
        //       },
        //     ],
        //     [],
        //   )

        // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        // useTable({ columns, data }, useSortBy)

        return(
        
            <Table size="sm" variant='striped' colorScheme='teal'>
                    <TableCaption>Punk Beers</TableCaption>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Name</Th>
                        <Th>Tagline</Th>
                        <Th>First Brewed</Th>
                        <Th>Description</Th>
                        <Th>Image</Th>
                        <Th>abv</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {beers.map((beer, key)=>(
                        <Tr key={key}>
                            <Td>{beer.id}</Td>
                            <Td>{beer.name}</Td>
                            <Td>{beer.tagline}</Td>
                            <Td>{beer.date}</Td>
                            <Td>{beer.description}</Td>
                            <Td>
                                <Image 
                                    src={beer.image_url}
                                    alt={beer.name}
                                    objectFit="contain"
                                    boxSize='100px'
                                    padding='none'
                                    boxShadow='2xl'
                                    p='1'
                                    rounded='5'
                                    bg='gray.200'
                                />
                            </Td>
                            <Td isNumeric>{beer.abv}</Td>
                        </Tr>              
                    ))
                    }
                </Tbody>
            </Table>        


    )

    }