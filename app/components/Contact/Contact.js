'use client'

import React from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'
import styles from './Contact.module.css'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append("access_key", "0f1c48f8-32d9-4d6a-b91d-3cbbc849aed3")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {
        Swal.fire({
          title: "Réservation réussie !",
          text: "Vous avez envoyé votre réservation !",
          icon: "success"
        })
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error)
      Swal.fire({
        title: "Erreur",
        text: "Une erreur s'est produite lors de l'envoi de votre réservation.",
        icon: "error"
      })
    }
  }

  return (
    <section className={styles.contact}>
      <div className={styles.logoContainer}>
        <Image src="/images/logo.png" alt="CAC Logo" width={100} height={100} className={styles.roundLogo} />
        <h1 className={styles.companyName}>
          <span className={styles.c}>C</span>
          <span className={styles.a}>A</span>
          <span className={styles.c2}>C</span>
        </h1>
      </div>
      <form onSubmit={onSubmit} className={styles.contactForm}>
        <h2>Réservation Service CAC</h2>
        <div className={styles.inputBox}>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" className={styles.field} placeholder='Entrer votre Nom' name='nom' required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" className={styles.field} placeholder='Entrer votre Prénom' name='prenom' required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="adresse">Adresse</label>
          <input type="text" id="adresse" className={styles.field} placeholder='Entrer votre adresse' name='adresse' required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.field} placeholder='Entrer votre Email' name='email' required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" className={styles.field} name='date' required />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="phone_number">Numéro de Téléphone</label>
          <input type="tel" id="phone_number" className={styles.field} placeholder='Entrer votre numéro de téléphone' name='phone_number' required pattern="[0-9]*" />
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="sexe">Sexe</label>
          <select id="sexe" name="sexe" className={styles.field} required>
            <option value="" disabled selected>Sélectionner votre sexe</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
            <option value="autre">Autre ou abstinence</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="reservation_type">Type de réservation</label>
          <select id="reservation_type" name="reservation_type" className={styles.field} required>
            <option value="" disabled selected>Votre Choix</option>
            <option value="Mariage Religieux">Mariage Religieux</option>
            <option value="Mariage Coutumier">Mariage Coutumier</option>
            <option value="Dote">Dote</option>
            <option value="Conference">Conférence</option>
            <option value="Anniversaire">Anniversaire</option>
            <option value="Manifestation">Manifestation</option>
            <option value="Collation">Collation</option>
            <option value="Defense">Défense</option>
            <option value="Seance privee">Séance privée</option>
            <option value="Celebration religieuse">Célébration religieuse</option>
            <option value="Manifestation Politique">Manifestation Politique</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className={styles.inputBox}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" className={`${styles.field} ${styles.mess}`} placeholder='Entrer les détails sur votre réservation ou laisser un message' required></textarea>
        </div>
        <button type="submit">Envoyer votre réservation</button>

      </form>
    </section>
  )
}


export default Contact