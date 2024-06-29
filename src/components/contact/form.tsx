"use client";
import React, { useState } from "react";

import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Formulario enviado exitosamente!");
      setShowConfetti(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex flex-wrap justify-center">
            <div className="relative pr-2 mb-4 w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Nombre
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="relative mb-4 w-1/2">
              <label
                htmlFor="lastname"
                className="leading-7 text-sm text-gray-400"
              >
                Apellido
              </label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Apellido"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="lastname"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="relative mb-4 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Correo
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Correo"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Teléfono
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Mensaje
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500"
              />
            </div>

            <button
              disabled={isLoading}
              className="w-full text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
            >
              Enviar
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 text-center mt-3">
              Dejanos saber tus dudas.
            </p>
          </div>
        </Form>
      </Formik>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </>
  );
};

export default ContactForm;
