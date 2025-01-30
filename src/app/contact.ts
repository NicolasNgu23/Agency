// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Validation des données
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont requis." });
      }

      // Sauvegarde dans la base de données
      const newMessage = await prisma.contact.create({
        data: {
          name,
          email,
          message,
        },
      });

      console.log("Message enregistré:", newMessage); // Ajout d'un log pour debug

      return res.status(200).json({ success: "Message envoyé avec succès !" });
    } catch (error) {
      console.error("Erreur Prisma:", error); // Log pour voir l'erreur exacte
      return res.status(500).json({ error: "Erreur lors de l'envoi du message." });
    }
  } else {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}
