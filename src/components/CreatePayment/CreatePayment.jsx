// import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { createPayment } from "../../redux/payments/payments.actions";
import { useState } from "react";

const CreatePayment = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    cuentaBanco: "",
    mesValidez: "",
    añoValidez: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPayment(formData));
    setFormData({
      nombre: "",
      apellido1: "",
      apellido2: "",
      cuentaBanco: "",
      mesValidez: "",
      añoValidez: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Apellido 1</FormLabel>
        <Input
          type="text"
          name="apellido1"
          value={formData.apellido1}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Apellido 2</FormLabel>
        <Input
          type="text"
          name="apellido2"
          value={formData.apellido2}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Cuenta Bancaria</FormLabel>
        <Input
          type="text"
          name="cuentaBanco"
          value={formData.cuentaBanco}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Mes</FormLabel>
        <Input
          type="text"
          name="mesValidez"
          value={formData.mesValidez}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Año de validez</FormLabel>
        <Input
          type="text"
          name="añoValidez"
          value={formData.añoValidez}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button type="submit">Enviar</Button>
    </form>
  );
};

export default CreatePayment;
