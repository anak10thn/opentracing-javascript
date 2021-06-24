import Span from './span.ts';
import SpanContext from './span_context.ts';
import Tracer from './tracer.ts';

export let tracer: Tracer | null = null;
export let spanContext: SpanContext | null = null;
export let span: Span | null = null;

// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
export function initialize(): void {
    tracer = new Tracer();
    span = new Span();
    spanContext = new SpanContext();
}
