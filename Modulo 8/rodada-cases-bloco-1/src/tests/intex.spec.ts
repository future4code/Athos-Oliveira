import {WalkingController} from '../controller/WalkingController';
import {WalkingMock,calculos} from './mocks/WalkingMock';
import {WalkingDTOMock} from './mocks/WalkingDTOMock';
import { walking,walkingInputDTO ,STATUS_TYPES} from "../model/walking";
import { DogWalkingBusiness } from "../business/WalkingBusiness"
import { DogWalkingDatabase } from "../data/WalkingDatabase"


const walkingInputDTO:walkingInputDTO={
  data_agendamento: new Date(),
  duracao:"00:30:00",
  latitude:1323,
  longitude:1231,
  pets:1,
  hora_inicio:"11:30:00",
  hora_termino:"12:30:00"
}
const walking:walking={
  id:"0001",
  Status:STATUS_TYPES.PENDENTE,
  preco:12,
  data_agendamento: new Date(),
  duracao:"00:30:00",
  latitude:1323,
  longitude:1231,
  pets:1,
  hora_inicio:"11:30:00",
  hora_termino:"12:30:00"
}



describe("teste entrada de dados",()=>{

    test("Should calculos 1" ,async()=>{
        const result = calculos(25,1)
        expect(result).toEqual(true);
      });
 
      

 
      const dogWalkingBusiness = new DogWalkingBusiness()
      test("teste )",async()=>{
        
        await dogWalkingBusiness.createWalking(walking)
        const result=dogWalkingBusiness.createWalking(walking)
        expect(result).not.toBe(undefined)
        expect(result).toEqual({id:"0001",
        Status:STATUS_TYPES.PENDENTE,
        preco:12,
        data_agendamento: new Date(),
        duracao:"00:30:00",
        latitude:1323,
        longitude:1231,
        pets:1,
        hora_inicio:"11:30:00",
        hora_termino:"12:30:00"})
      })
      test("teste 2",async()=>{
        
        try {
      
        await dogWalkingBusiness.createWalking(walking)
        await dogWalkingBusiness.createWalking(walking)
        
        } catch (error:any) {
          expect(error).not.toBe(undefined)
        }
      })

    })


