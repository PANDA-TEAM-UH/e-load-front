//import React from 'react'
import './PersonalInformation.scss'
import { Button } from '@chakra-ui/react';
import RegEditForm from '../RegEditForm/RegEditForm';

const PersonalInformation = () => {
  return (
    <div>
      <div className="profile-photo">
        <img src="ruta-foto-perfil" alt="Foto de perfil" />
        <Button>Editar</Button>
      </div>
      <div className="edit-form">
        <RegEditForm/>
      </div>
    </div>
  );
};

export default PersonalInformation;
