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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  )
}

export default PokemonModal