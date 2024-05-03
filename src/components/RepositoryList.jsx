import React from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { data } from '../data/repositories'

const RepositoryList = () => {
    return (
        <FlatList data={data}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({item}) => (
                <RepositoryItem repository = {item}/>
            )}>
        </FlatList>
    )
}



export default RepositoryList