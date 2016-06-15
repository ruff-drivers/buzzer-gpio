export declare class Buzzer extends RuffDevice {
    /**
     * Turn on the Buzzer.
     * @param callback - The callback.
     */
    turnOn(callback: (error : Error) => void): void;

    /**
     * Turn off the Buzzer.
     * @param callback - The callback.
     */
    turnOff(callback: (error : Error) => void): void;

    /**
     * Get the working state of the Buzzer
     * @param callback - The callback.
     */
    isOn(callback: (error: Error, state: boolean) => void): void;
}

export default Buzzer;
