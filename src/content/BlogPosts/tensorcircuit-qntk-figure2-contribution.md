---
title: "TensorCircuit-NG QNTK Figure 2 Reproduction"
date: "2026-09-22"
locale: "en"
tags: ["Open Source", "TensorCircuit-NG", "QNTK"]
excerpt: "A bilingual record of the TensorCircuit-NG contribution, its review revisions, validation, and merged pull requests."
draft: false
---

## English

This note records my contribution to [TensorCircuit-NG](https://github.com/tensorcircuit/tensorcircuit-ng), so the implementation details remain easy to revisit from the Projects page.

### Contribution

[PR #131](https://github.com/tensorcircuit/tensorcircuit-ng/pull/131) adds a self-contained reproduction of Figure 2 from [*Towards Practical Quantum Neural Network Diagnostics with Neural Tangent Kernels*](https://arxiv.org/abs/2503.01966). The example uses a six-qubit transverse-field Ising regression task, four QNN architectures, depths 5–30, and three fixed random initializations. It evaluates QNTK spectral and conditioning diagnostics for low- and high-frequency HVA/HEA circuits.

The reproduction recovers the paper's main qualitative behavior: low-frequency circuits retain high test $R^2$, while high-frequency circuits approach zero test $R^2$ as depth increases.

### Review revisions

The review identified an observable mismatch and excessive PyTorch-specific handling. Commit `272271f` addressed both issues by switching the representative observable to `expectation_ps(x=[0])`, moving tensor conversion, vectorization, and JIT operations to TensorCircuit backend APIs, and adding `--backend jax|pytorch`.

The PyTorch scalar-output Jacobian uses the equivalent backend gradient transform because the `jacrev` path in TensorCircuit-NG 1.9.1 was incompatible with the relevant functorch transform. The runs keep precision, seeds, depths, inputs, and encoding scale aligned across backends.

### Validation and status

- 72/72 configured PyTorch reproduction points completed.
- Representative JAX/PyTorch parity checks covered all four architectures.
- Maximum output and Jacobian differences were below `5e-16` in those checks.
- Black, Pylint, Python compilation, and gallery generation passed.
- No TensorCircuit-NG core source files were modified.
- [PR #131](https://github.com/tensorcircuit/tensorcircuit-ng/pull/131) merged into `tensorcircuit:master`.
- [PR #132](https://github.com/tensorcircuit/tensorcircuit-ng/pull/132) added `ninjaduck7` to the contributor documentation and was merged.

The upstream reproduction command is:

```bash
python examples/reproduce_papers/2025_qntk_diagnostics/main.py
```

### Follow-up

- Re-run the example with the latest TensorCircuit-NG release and record the environment versions.
- Decide whether to extend the scalar $X_0$ observable to the normalized six-qubit average of all $X$ expectations.
- Document the digitized VQE targets and reconstruction choices.
