export declare class Buzzer extends RuffDevice {
    /**
     * Turn on the Buzzer
     */
    turnOn(): void;

    /**
     * Turn off the Buzzer.
     */
    turnOff(): void;

    /**
     * Get the working state of the Buzzer
     * @returns ture means the Buzzer is on, false means the Buzzer is off.
     */
    isOn(): boolean;
}

export default Buzzer;
