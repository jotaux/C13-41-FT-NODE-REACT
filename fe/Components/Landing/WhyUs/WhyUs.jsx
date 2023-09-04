import React from 'react'
import styled from '@emotion/styled';
import { ColorsKlinik } from '@/app/colors';

const WhyUsContainer = styled ("section") ({

    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    flexDirection: "column",

});

const InsiderContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    alignItems: "center",

});

const TextContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "30px",
    flexDirection: "column",
    gap: "10px",

});

const ImageContainer = styled ("div") ({

    display: "flex",
    justifyContent: "start",
    marginTop: "30px",
    flexDirection: "column",

});

const Title = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "400",
    textAlign: "center",

});

const MotiveTitle = styled ("h1") ({

    fontSize: "40px",
    color: `${ColorsKlinik.text}`,
    fontWeight: "600",
    textAlign: "left",

});

const MotiveText = styled ("p") ({

    fontSize: "14px",
    color: `${ColorsKlinik.text}`,
    textAlign: "left",

});

const DoctorsImage = styled ("img") ({

    width: "792px",
    height: "376px",

});

function WhyUs () {

  return (

    <WhyUsContainer>
        <Title>Why Klinika?, because we understand the value of your time and your health. Our intuitive scheduling system empowers you to:</Title>
        <InsiderContainer>

            <TextContainer>

                <MotiveTitle>Take Control</MotiveTitle>
                <MotiveText> You are in charge of your healthcare journey. Browse through available appointment slots and choose the one that fits your schedule seamlessly</MotiveText>
                <MotiveTitle>24/7 Accessibility</MotiveTitle>
                <MotiveText>No need to wait for office hours to make an appointment. Our platform is accessible round the clock, allowing you to book at a time that suits you best.</MotiveText>
                <MotiveTitle>Effortless Booking</MotiveTitle>
                <MotiveText>Say goodbye to long hold times on the phone. With just a few clicks, you can secure your spot with your preferred health professional.</MotiveText>
                <MotiveTitle>Transparent Availability</MotiveTitle>
                <MotiveText>Get a clear view of the available time slots for your chosen health professional. This transparency ensures you make the best informed decisions.</MotiveText>

            </TextContainer>

            <ImageContainer>
                <DoctorsImage src="https://media.istockphoto.com/id/1189304032/es/foto/m%C3%A9dico-sosteniendo-tableta-digital-en-la-sala-de-reuniones.jpg?s=612x612&w=0&k=20&c=pmijXzja8qGwKXlqt7YWzSUkxFxnODfK6u7B1QXd1wU="/>
            </ImageContainer>
        </InsiderContainer>
    </WhyUsContainer>
  )

}

export default WhyUs