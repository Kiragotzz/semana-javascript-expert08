import { createFile } from "../deps/mp4box.0.5.2";

export default class MP4Demuxer {
  #onConfig;
  #onChunk;
  #file;

  /**
   *
   * @param {ReadableStream} stream
   * @param {object} options
   * @param {(config: object)=>void} options.onConfig
   *
   * @return {Promise<void>}
   */
  async run(stream, { onConfig, onChunk }) {
    this.#onConfig = onConfig;
    this.#onChunk = onChunk;

    this.#file = createFile();
    this.#file.onReady = (args) => {
      debugger;
    };

    this.#file.onChunk = (error) => 
      console.log("deu ruim mp4Demuxer", error);

    this.#init(stream)
  }

  #init(stream) {

    const consumeFile  = new WritableStream({
      write: (chunk) => {
        debugger
      }
    })
  }
}
