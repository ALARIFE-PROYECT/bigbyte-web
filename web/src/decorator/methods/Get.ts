import { declareDecorator, executeDecorator } from "@bigbyte/utils/registry";
import Logger from "@bigbyte/utils/logger";
import { DECORATOR_GET_NAME } from "../../constant";
import { currentController } from "../Controller";

const log = new Logger(DECORATOR_GET_NAME, LIBRARY_NAME);

export const Get = (): MethodDecorator => {
    declareDecorator(DECORATOR_GET_NAME);

    return (target: Function, propertyKey: string, descriptor: PropertyDescriptor): void => {
        // log.dev(`${DECORATOR_GET_NAME} decorator applied to ${Target.name}`);

        /**
         * TODO: Comprobar que se esta usando en un metodo, solo si con el tipo no es suficiente
         */

        currentController.routes.push({});

        executeDecorator(DECORATOR_GET_NAME);
    }
}