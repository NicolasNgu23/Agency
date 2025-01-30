"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useActionState } from "react";
import { startTransition } from "react";
import { createContact } from "../action"; 
import Swal from "sweetalert2"; 

type FormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormState = { name: string; email: string; message: string; errors: { name?: string; email?: string; message?: string; }; };

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [state, formAction, isPending] = useActionState(
    createContact, 
    { name: "", email: "", message: "", errors: {} }
  );

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append("name", data.name.trim());
      formData.append("email", data.email.trim());
      formData.append("message", data.message.trim());

      try {

        await formAction(formData);

        onClose();

        if (!state.errors.name && !state.errors.email && !state.errors.message) {
          Swal.fire({
            icon: 'success',
            title: 'Message envoyé',
            text: 'Votre message a été envoyé avec succès !',
            confirmButtonText: 'OK',
          });
        }
      } catch (error) {
        if(error){
          console.log(error)
        }
        onClose();

        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l\'envoi du message.',
          confirmButtonText: 'OK',
        });
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Formulaire de Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Le nom est requis" })}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { 
                required: "L'email est requis", 
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Veuillez entrer un email valide",
                }
              })}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Le message est requis" })}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <div className="flex justify-between items-center">
            <button 
              type="button" 
              onClick={onClose} 
              className="py-2 px-4 bg-gray-500 text-white rounded-md"
            >
              Fermer
            </button>
            <button
              type="submit"
              disabled={isPending}
              className={`py-2 px-4 bg-blue-500 text-white rounded-md ${isPending ? 'opacity-50' : ''}`}
            >
              {isPending ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>

        {/* Ne pas afficher d'erreur non utilisée */}
        {state.errors.name && <p className="text-red-500 mt-4">{state.errors.name}</p>}
        {state.errors.email && <p className="text-red-500 mt-4">{state.errors.email}</p>}
        {state.errors.message && <p className="text-red-500 mt-4">{state.errors.message}</p>}
      </div>
    </div>
  );
};

export default ContactModal;
