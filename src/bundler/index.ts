import * as esbuild from 'esbuild-wasm';
import { resolvePlugin } from './plugins/resolve-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let service: esbuild.Service;

const bundler = async (rawCode: string) => {
  //initialize the bundler

  if (!service) {
    service = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  }

  //initialize the service
  try {
    const result = await service.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [resolvePlugin(), fetchPlugin(rawCode)],
      define: { 'process.env.NODE_ENV': '"production"', global: 'window' },
    });
    return {
      code: result.outputFiles[0].text,
      err: '',
    };
  } catch (err: any) {
    return {
      code: '',
      err: err.message,
    };
  }
};

export default bundler;
