// Problem Statement
// In this question, you are tasked with implementing a robust event logging and processing system for an SDK (Software Development Kit).
// The system should be able to log events, process them asynchronously, and handle failures with a retry mechanism.
// Your implementation should ensure that events are processed in the order they were logged and that the processing
// is not interrupted by concurrent calls.

// Methods
// log(data: any): A method to add new events to the queue.

// data: The event data to be logged.
// send(): An async (returns a Promise) method to start processing the logged events.

// Examples
// const sdk = new SDK();

// // Logging events
// sdk.log("event 1");
// sdk.log("event 2");
// sdk.log("event 3");
// sdk.log("event 4");
// sdk.log("event 5");

// // Start processing events
// sdk.send();
// // could be await sdk.send();

// // Success: event 1
// // Success: event 2
// // Success: event 3
// // Success: event 4
// // ---RETRYING 1/3--- event 5
// // Success: event 5
// Additional requirements
// Implement a retry mechanism for failed events with a maximum of 3 retries.
// Simulate the request in a way that every 5th request (n % 5 === 0) should fail.
// Ensure that the send() method can be called multiple times without causing concurrent processing of events.
// Implement proper error handling and logging i.e.
// When successful: log Success: {event data}
// When failed: log ---RETRYING {currentCount}/{totalRetries}--- {event data}

class SDK {
  constructor() {
    this.eventsQueue = []
    this.processedCount = 0
  }

  log(data) {
    this.eventsQueue.push(data)
  }

  async processEvent(event, retryCount = 0, maxRetries = 3) {
    this.processedCount++
    try {
      if (this.processedCount % 5 === 0 && retryCount === 0) {
        this.processedCount--
        throw new Error('Simulated failure')
      }

      await new Promise((resolve) => setTimeout(resolve, 50))
      console.log(`Success: ${event}`)
    } catch (error) {
      if (retryCount < maxRetries) {
        console.log(`---RETRYING ${retryCount + 1}/${maxRetries}--- ${event}`)
        await this.processEvent(event, retryCount + 1, maxRetries)
      } else {
        console.error(`Failed: ${event} after ${maxRetries} retries`)
      }
    }
  }

  async send() {
    while (this.eventsQueue.length > 0) {
      const event = this.eventsQueue.shift()
      await this.processEvent(event)
    }
  }
}

const sdk = new SDK()

// Logging events
sdk.log('event 1')
sdk.log('event 2')
sdk.log('event 3')
sdk.log('event 4')
sdk.log('event 5')
sdk.log('event 6')
sdk.log('event 7')
sdk.log('event 8')
sdk.log('event 9')
sdk.log('event 10')

// Start processing events
sdk.send()
// could be await sdk.send();

// Success: event 1
// Success: event 2
// Success: event 3
// Success: event 4
// ---RETRYING 1/3--- event 5
// Success: event 5
