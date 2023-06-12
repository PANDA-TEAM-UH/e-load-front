import { FormLabel, Input } from '@chakra-ui/react';

const UploadFile = ({ register, funcion, isRegister }) => {
  return (

    <FormLabel className={isRegister ? "file-input-btn" : "file-input-btn file-input-btn__upload"} htmlFor="file-input">
      <Input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        {...register("image")}
        onChange={funcion}
      />
    </FormLabel>

  );
};

export default UploadFile;