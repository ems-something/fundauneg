import React, { FunctionComponent } from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  lastaname: string;
  email: string;
  phone: string;
  message: string;
}

export const Email: FunctionComponent<Readonly<EmailProps>> = ({
  name,
  lastaname,
  email,
  phone,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              ¡Tienes un mensaje!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hola FundaUneg,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Recibiste un correo electrónico de{" "}
              <strong>
                {name}&nbsp;{lastaname}
              </strong>
              . Su correo electrónico es {email}. Su teléfono es {phone}. El
              mensaje: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
