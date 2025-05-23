import { Spectre } from "./data/projects/professional/spectre";
import { AjarisUploaderMobile } from "./data/projects/professional/ajarisUploaderMobile";
import { ObjectDetection } from "./data/projects/professional/objectDetection";
import { CloneSportify } from "./data/projects/personal/cloneSportify";
import { MedicalImageRecognition } from "./data/projects/personal/medicalImageRecognition";
import { ShazamDuVin } from "./data/projects/university/shazamDuVin";
import { Tetravex } from "./data/projects/university/tetravex";
import { FrancePublicMarket } from "./data/projects/university/francePublicMarket";
import { DecisionAid } from "./data/projects/university/decisionAid";
import { CharacterGraphBuilder } from "./data/projects/university/characterGraphBuilder";

export const projects = {
    professional: {
        type: 'Professionnel',
        projects: [
            Spectre,
            AjarisUploaderMobile,
            ObjectDetection,
        ],
    },
    personal: {
        type: 'Personnel',
        projects: [
            CloneSportify,
            MedicalImageRecognition,
        ],
    },
    university: {
        type: 'Universitaire',
        projects: [
            ShazamDuVin,
            Tetravex,
            FrancePublicMarket,
            DecisionAid,
            CharacterGraphBuilder,
        ],
    },
};

export default projects;