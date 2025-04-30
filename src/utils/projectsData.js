import { Spectre } from "./projects/professional/spectre";
import { AjarisUploaderMobile } from "./projects/professional/ajarisUploaderMobile";
import { ObjectDetection } from "./projects/professional/objectDetection";
import { CloneSportify } from "./projects/personal/cloneSportify";
import { MedicalImageRecognition } from "./projects/personal/medicalImageRecognition";
import { ShazamDuVin } from "./projects/university/shazamDuVin";
import { Tetravex } from "./projects/university/tetravex";

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
    ],
};

export default projects;