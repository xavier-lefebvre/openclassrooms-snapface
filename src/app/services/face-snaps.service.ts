import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";


@Injectable({
    providedIn: "root"
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Jackie',
            description: 'Un hipster',
            imageUrl: 'https://www.cohl.fr/wp-content/uploads/2021/07/Pierre-Perifel-1-1.jpg',
            createdDate: new Date(),
            snaps: 1
        },
        {
            id: 2,
            title: 'Pepe',
            description: 'Une personne agée',
            imageUrl: 'https://i.imgflip.com/16j01x.jpg',
            createdDate: new Date(),
            snaps: 69,
            location: 'un endroit montagneux'
        },
        {
            id: 3,
            title: 'Micqueline',
            description: 'Dans son jardin',
            imageUrl: 'https://media.istockphoto.com/photos/lifes-about-the-moments-that-made-you-smile-picture-id1158818161?b=1&k=20&m=1158818161&s=170667a&w=0&h=Y2Sw7SmktZjuerGgQ1ZLN5jbeVjqwu4hoS7uFmCYFjY=',
            createdDate: new Date(),
            snaps: 420
        }
    ]

    // cette méthode retourne tous les faceSnaps contenus dans le service
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    // récupère le FaceSnap et throw une erreur si on ne le trouve pas.   
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    /*
    cherche un FaceSnap par son  id  dans le tableau faceSnaps avec la fonction  find()  ;
    si le FaceSnap existe, on lui incrémente ses  snaps  ;
    sinon, on  throw  une erreur.
    */
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void { // la valeur de snapType est un 'literal type'
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}

