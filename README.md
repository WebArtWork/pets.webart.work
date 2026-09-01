# Pets

Pets is a **pet care operating platform** connecting **owners → pets →
health records → appointments → specialists → shelters → adoption →
products & services** in one place, so a pet's entire life — and every
service and business around it — lives in one system instead of being
scattered across paper vaccination cards, vet receipts, and word-of-mouth
recommendations.

This repository is currently a static, investor-facing demo of that
product vision — real, realistic content and a fully navigable app, with
no backend or persistence behind it yet.

## The core entities

- **Pet Profile** — a pet's identity: species, breed, age, photos,
  ownership, and a permanent record that follows it for life.
- **Health Record** — vaccinations, treatments, diagnoses, medications,
  allergies, and vet visits, each with date, provider, and documents.
- **Appointment** — a scheduled visit with a specialist — veterinary,
  grooming, training, walking, boarding, or another service — tracking
  time, location, provider, and outcome.
- **Adoption Application** — a request from a prospective owner to adopt a
  shelter animal, tracking status, history, and communication with the
  shelter.
- **Shelter Animal** — an animal in shelter care: intake details, medical
  history, temperament notes, adoption status, and photos.
- **Service Listing** — a specialist or business offering a service
  (veterinary care, grooming, training, walking, breeding, boarding,
  transportation, insurance, etc.), with pricing, availability, and
  reviews.
- **Product** — pet food, accessories, medication, and other goods sold
  through the platform.
- **Document** — vaccination certificates, prescriptions, pedigree papers,
  insurance policies, and other files attached to a pet or an appointment.
- **Volunteer** — a person helping a shelter with animal care, events, or
  fostering.
- **Comment / Review** — feedback on a specialist, shelter, or business.

## Roles

Every person or business on the platform plays one or more of these roles.
Each has its own marketing/onboarding page (`/for-*`):

1. **Owners** — maintain pet profiles, health/history records,
   appointments, services, documents, and ownership information for their
   own pets. ([/for-owners](src/app/pages/for-owners))
2. **Specialists** — veterinary, grooming, training, walking, breeding,
   and other professional pet services offered directly to owners.
   ([/for-specialists](src/app/pages/for-specialists))
3. **Shelters** — manage animals, adoption profiles, applications, medical
   records, volunteers, and completed adoptions.
   ([/for-shelters](src/app/pages/for-shelters))
4. **Businesses** — pet products, services, accommodation, insurance,
   transportation, and other commercial services around pet care.
   ([/for-businesses](src/app/pages/for-businesses))

## How people use it

- **Pet Profiles** — a single place to see everything about a pet: health
  history, upcoming appointments, documents, and ownership.
- **Health Records** — vaccinations, treatments, and vet visits recorded
  over time, so a pet's full medical history travels with it, not with any
  one clinic.
- **Appointments** — book and track visits with veterinary, grooming,
  training, walking, or boarding specialists.
- **Adoption** — shelters publish animals available for adoption; owners
  browse and apply, with the application and its status tracked end to
  end.
- **Marketplace** — businesses list products and services (food,
  accessories, insurance, transportation, accommodation) that owners and
  specialists can discover and use.
- **Reviews** — owners rate specialists, shelters, and businesses based on
  real appointments and interactions.

## Status

Static demo, no backend or persistence yet. For contributor/developer setup
and coding conventions, see [AGENTS.md](AGENTS.md).
