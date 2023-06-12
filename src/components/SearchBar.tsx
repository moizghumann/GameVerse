import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
    return (
        <>
            <InputGroup >
                <InputLeftElement pointerEvents='none' paddingLeft={2} paddingTop={'0.9px'}>
                    <BiSearch color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Search games' borderRadius={20} width={'39%'} minWidth={250} />
            </InputGroup>
        </>
    )
}

export default SearchBar