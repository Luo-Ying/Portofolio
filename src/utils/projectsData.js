import { Spectre } from "./data/projects/professional/spectre";
import { AjarisUploaderMobile } from "./data/projects/professional/ajarisUploaderMobile";
import { ObjectDetection } from "./data/projects/professional/objectDetection";
import { CloneSportify } from "./data/projects/personal/cloneSportify";
import { MedicalImageRecognition } from "./data/projects/personal/medicalImageRecognition";
import { ShazamDuVin } from "./data/projects/university/shazamDuVin";
import { Tetravex } from "./data/projects/university/tetravex";
import { FrancePublicMarket } from "./data/projects/university/francePublicMarket";
import { DecisionAid } from "./data/projects/university/decisionAid";

export const projects = {
    professional: [
        Spectre,
        AjarisUploaderMobile,
        ObjectDetection,
    ],
    personal: [
        CloneSportify,
        MedicalImageRecognition,
    ],
    university: [
        ShazamDuVin,
        Tetravex,
        FrancePublicMarket,
        DecisionAid,
    ],
};

export default projects;