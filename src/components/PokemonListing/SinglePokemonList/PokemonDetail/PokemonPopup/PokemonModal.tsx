import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
interface MyComponentProps {
  isOpen: boolean
  onClose: () => void
  children: any
}
const PokemonModal: React.FC<MyComponentProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent background={'linear-gradient(to bottom, rgb(43, 42, 42), rgb(27, 27, 27))'} color={"#FFF"} maxW={{ base: "750px" }} padding={10}>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PokemonModal