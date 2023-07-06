import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
  FaLinux
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from 'react-icons';
import { Platform } from '../entities/Platform';

interface Prop {
  // back in GameCard.tsx, .map function iterate over elements in an array and perform a specific operation on each element. thus platforms should be an array of strings rather than only string
  platforms: Platform[]
}

// index signature
interface IconTypes {
  [key: string]: IconType;
}

// receives p.platforms -> object{} which get stored in platforms array -> platforms[{p.platform}, 
// {p.platform}, {p.platform}, ...]
const PlatformsIconList = ({ platforms }: Prop) => {

  // object variable Iconmap with IconTypes interface that defines an index signature, which allows accessing properties of the object using dynamic keys
  const Iconmap: IconTypes = {
    // name: PlayStation
    // slug: playstation  -> slug is a textual id
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack>
      {/* typescript uses index signature if you try to access object property dynamically */}

      {/* Dynamically accessing an object property in TypeScript means accessing a property of an object using a variable containing the property name, rather than directly using the property name in the code. */}

      {/* 
      1. For each object 'p' in the platforms array, We access the slug property of the object 'p' -> p.slug
      2. We use the slug value as a key to dynamically access the corresponding icon component from the Iconmap object -> Iconmap[p.slug]
      3. The Iconmap object is defined earlier and maps each platform slug to a specific icon component.
      4. We use the as={} prop of the Icon component to dynamically assign the corresponding icon component to be rendered. 
      */}
      {platforms.map(p => (
        <Icon key={p.id} as={Iconmap[p.slug]} color='gray.200' />
      ))}
    </HStack>
  )
}

export default PlatformsIconList