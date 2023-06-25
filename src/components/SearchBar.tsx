import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

interface Prop {
    onSearch: (search: string) => void;
}

const SearchBar = ({ onSearch }: Prop) => {

    const ref = useRef<HTMLInputElement>(null)

    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }} >
                <InputGroup >
                    <InputLeftElement pointerEvents='none' paddingLeft={2} paddingTop={'0.9px'}>
                        <BiSearch color='gray.300' />
                    </InputLeftElement>
                    <Input ref={ref} type='text' placeholder='Search games' borderRadius={20} width={'39%'} minWidth={150} />
                </InputGroup>
            </form>
        </>
    )
}

export default SearchBar