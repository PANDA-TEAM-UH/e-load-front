import { AddPhotoAlternate } from "@mui/icons-material";
import { FormLabel, Input } from '@chakra-ui/react';

const UploadFile = ({ register, funcion, isRegister }) => {
  return (
    <div className="file-input">
      <Input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        {...register("image")}
        onChange={funcion}
      />
      <FormLabel className={isRegister ? "file-input-btn" : "file-input-btn file-input-btn__upload"} htmlFor="file-input">
        <AddPhotoAlternate/>
        <span>Subir imagen de perfil</span>
      </FormLabel>
    </div>
  );
};

export default UploadFile;