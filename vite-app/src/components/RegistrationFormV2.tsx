import type { FC, SyntheticEvent } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormLabel,
  Input,
  Select,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { regFormSchema } from '../schamas/registrationForm';
import type { RegFormSchema } from '../schamas/registrationForm';
import { genderCode } from '../schamas/constants';

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegFormSchema>({
    defaultValues: {
      username: '',
      isAgreed: false,
    },
    resolver: yupResolver(regFormSchema),
  });
  const onSubmit: SubmitHandler<RegFormSchema> = (data) => {
    console.log(data);
  };
  const onReset = (e: SyntheticEvent) => {
    e.stopPropagation();
    reset();
  };

  return (
    <Box p={5} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <form onSubmit={handleSubmit(onSubmit)} action="/hoge">
        <FormControl isInvalid={errors.username !== undefined}>
          <FormLabel htmlFor="username" mt={2}>
            ユーザー名
          </FormLabel>
          <Input size="md" {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.zipcode !== undefined}>
          <FormLabel htmlFor="zipcode" mt={4}>
            郵便番号
          </FormLabel>
          <Input size="md" maxLength={7} {...register('zipcode')} />
          <FormErrorMessage>{errors.zipcode?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.gender !== undefined}>
          <Select my={6} placeholder="性別を選択…" {...register('gender')}>
            {Object.entries(genderCode).map(([code, name]) => (
              <option value={code} key={code}>
                {name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors.gender?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.isAgreed !== undefined}>
          <Checkbox {...register('isAgreed')}>規約に同意する</Checkbox>
          <FormErrorMessage justifyContent={'center'}>
            {errors.isAgreed?.message}
          </FormErrorMessage>
        </FormControl>

        <ButtonGroup my={3} w="xs">
          <Button
            w="30%"
            colorScheme="orange"
            variant="solid"
            onClick={onReset}
          >
            リセット
          </Button>
          <Button w="70%" colorScheme="blue" variant="solid" type="submit">
            送信
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default RegistrationForm;
