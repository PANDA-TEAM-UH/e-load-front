import { useForm } from "react-hook-form";
import { createStation, updateStation } from "../../../redux/stations/stations.actions"
import PropTypes from "prop-types";
import { Button, Flex, FormControl, FormLabel, Input, Select, Spacer } from "@chakra-ui/react";

const AdminStationForm = ({selectedCoordinates, isEditing}) => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const onSubmit= (dataStation) => {
        if(isEditing && station){
            updateStation(dataStation);
        }
        else{
            createStation({
                ...dataStation,
                coordinatesLat: selectedCoordinates.lat,
                coordinatesLng: selectedCoordinates.lng
            });
        }
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
            <Flex direction='column' gap={3}>
                <FormLabel>Coordenadas</FormLabel>
                <Flex gap={3}>
                    <Input
                        placeholder="Latitud"
                        disabled
                        value={selectedCoordinates ? selectedCoordinates.lat : ''}
                    />
                    <Input
                        placeholder="Longitud"
                        disabled
                        value={selectedCoordinates ? selectedCoordinates.lng : ''}
                    />
                </Flex>
                <Input
                    {...register("address")}
                    placeholder="Dirección"
                    maxLength={50}
                />
                <Flex display='flex' alignItems='center'>
                    <FormLabel>Horario</FormLabel>
                    <Select
                        {...register("schedule")}
                        width={200}
                        defaultValue={'Selecciona una opción'}
                    >
                        <option  disabled value="Selecciona una opción">Selecciona una opción</option>
                        <option value="10:00 - 22:00">10:00 - 22:00</option>
                        <option value="24 Horas">24 Horas</option>
                    </Select>
                    <Spacer/>
                    <Button type="subtmit" bg={'defaultColor'} color={'whiteColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}}>
                        {isEditing ? "ACTUALIZAR" : "GUARDAR"}
                    </Button>
                </Flex>            
            </Flex>
        </FormControl>
    </form>
  )
}
AdminStationForm.propTypes = {
    isEditing: PropTypes.bool,
    selectedCoordinates: PropTypes.object
  };

export default AdminStationForm