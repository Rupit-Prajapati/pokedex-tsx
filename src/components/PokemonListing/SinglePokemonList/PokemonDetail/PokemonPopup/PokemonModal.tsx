import { Modal, ModalCloseButton, ModalContent, ModalOverlay, Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface MyComponentProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
const PokemonModal: React.FC<MyComponentProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background={'linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27))'} color={"#FFF"} maxW={{ base: "90%", sm: "450px", md: '700px' }} padding={{ base: 5, sm: 10 }}>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PokemonModal