import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

  import { Button, ButtonGroup } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

export const MenuComp = () => {

    return (

        <Menu>
        {({ isOpen }) => (
            <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                {isOpen ? 'Close' : 'Open'}
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
            </MenuList>
            </>
        )}
        </Menu>

    )

  }

  export default MenuComp